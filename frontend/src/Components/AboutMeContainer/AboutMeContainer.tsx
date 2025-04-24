import { useOutletContext } from "react-router";
import { OutletUserContext } from "../../types/UserType";
import { useForm } from "react-hook-form";
import { User } from "../../types/UserType";
import { putUser } from "../../api/userAPI";
import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./AboutMeContainer.css";

const developerLevels = ['junior', 'mid', 'senior', 'architect', 'team-lead'] as const;

export default function AboutMeContainer() {
    const { userInfo, setUserInfo } = useOutletContext<OutletUserContext>();
    const [apiError, setApiError] = useState<string | null>(null);
    
    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting, isDirty, isValid }, 
        reset
    } = useForm<User>({
        mode: "onBlur",
        defaultValues: {
            name: userInfo?.name || '',
            bio: userInfo?.bio || '',
            developerLevel: userInfo?.developerLevel || 'junior'
        }
    });

    const onSubmit = async (data: Partial<User>) => {
        if (!userInfo) return;
        setApiError(null);
        
        try {
            const updatedUser = { ...userInfo, ...data };
            
            // Optimistic UI update
            setUserInfo(updatedUser);
            localStorage.setItem(import.meta.env.VITE_CURR_USER, JSON.stringify(updatedUser));
            
            const result = await putUser(updatedUser);
            
            if ('error' in result) {
                throw new Error(result.error);
            }
            
            // Reset form dirty state after successful submission
            reset(updatedUser);
        } catch (error) {
            console.error("Failed to update user:", error);
            setApiError(error instanceof Error ? error.message : "Failed to save changes");
            
            // Revert local state if API call fails
            setUserInfo(userInfo);
        }
    };

    const isSubmitDisabled = isSubmitting || !isDirty || !isValid;

    return (
        <form className="self-info-sect" noValidate onSubmit={handleSubmit(onSubmit)}>
            {apiError && <ErrorMessage message={apiError} />}

            <section className="form-group">
                <input 
                    type="text" 
                    {...register("name", {
                        required: "Name is required",
                        minLength: { value: 2, message: "The name must be at least 2 characters" },
                        pattern: { 
                            value: /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/, 
                            message: "The name must start with capital letter" 
                        }
                    })} 
                    placeholder="Enter Name"
                />
                {errors.name && <span className="error">{errors.name.message}</span>}
            </section>

            <section className="form-group">
                <textarea 
                    {...register("bio", {
                        minLength: { value: 3, message: "The bio must be at least 3 characters" },
                        required: "Bio is required"
                    })} 
                    placeholder="Tell us about yourself"
                />
                {errors.bio && <span className="error">{errors.bio.message}</span>}
            </section>

            <section className="form-group">
                <label>Developer Level</label>
                <select {...register("developerLevel")}>
                    {developerLevels.map(level => (
                        <option key={level} value={level}>
                            {level.charAt(0).toUpperCase() + level.slice(1)}
                        </option>
                    ))}
                </select>
            </section>

            <button 
                type="submit" 
                disabled={isSubmitDisabled}
                aria-disabled={isSubmitDisabled}
            >
                {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
        </form>
    );
}