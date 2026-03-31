import type { AvatarProps } from "@mui/material/Avatar";
export interface UserAvatarProps extends Omit<AvatarProps, "sx"> {
    sx?: AvatarProps["sx"];
}
/** Avatar circular 36×36 (cabeçalho / perfil compacto). */
export declare function UserAvatar({ sx, ...props }: UserAvatarProps): import("react/jsx-runtime").JSX.Element;
