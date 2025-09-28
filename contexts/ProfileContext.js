import React, { createContext, useContext, useState } from 'react';

const initialProfile = {
  name: 'Bruno',
  age: 21,
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
  course: 'Engenharia de Software',
  university: 'UNIFACS',
  bio: 'Engenheiro de Software e aspirante a chef. Se você gosta de boa comida e conversas interessantes, me chama.',
  images: [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
    null, null, null, null, null
  ],
  discoverySettings: {
    sexuality: 'Todos',
    gender: 'Todos',
    university: 'Todas',
    course: 'Todos',
  }
};

const ProfileContext = createContext(null);

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === null) {
    throw new Error('useProfile deve ser usado dentro de um ProfileProvider');
  }
  return context;
}

export function ProfileProvider({ children }) {
  const [userProfile, setUserProfile] = useState(initialProfile);

  const value = {
    userProfile,
    setUserProfile,
  };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
}

