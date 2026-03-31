import Avatar from "@mui/material/Avatar";
import type { AvatarProps } from "@mui/material/Avatar";

export interface UserAvatarProps extends Omit<AvatarProps, "sx"> {
  sx?: AvatarProps["sx"];
}

/** Avatar circular 36×36 (cabeçalho / perfil compacto). */
export function UserAvatar({ sx, ...props }: UserAvatarProps) {
  return (
    <Avatar
      sx={[
        { width: 36, height: 36, fontSize: 14 },
        ...(Array.isArray(sx) ? sx : sx != null ? [sx] : []),
      ]}
      {...props}
    />
  );
}
