import { useState } from 'react';

import { SideBar } from './components/SideBar';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { Content } from './components/Content';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar 
        selectedGenreId={selectedGenreId} 
        onSelectedGenreChange={(id: number) => handleClickButton(id)} 
        />
      <Content selectedGenreId={ selectedGenreId } />
    </div>
  )
}