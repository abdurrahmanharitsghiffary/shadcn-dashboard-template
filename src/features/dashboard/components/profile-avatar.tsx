import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import React from 'react';
import ProfileDropdown from './profile-dropdown';

type ProfileAvatarProps = {
  name: string;
  email: string;
  avatar: string;
};

export default function ProfileAvatar(props: ProfileAvatarProps) {
  return (
    <ProfileDropdown {...props}>
      <Avatar className="rounded-full w-10 h-10 cursor-pointer">
        <AvatarImage src={props.avatar} alt={props.name} />
        <AvatarFallback className="">CN</AvatarFallback>
      </Avatar>
    </ProfileDropdown>
  );
}
