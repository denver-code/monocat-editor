import { useState } from 'react';

function AvatarEditor() {
  const [selectedAvatar, setSelectedAvatar] = useState('avatar-0.png');
  const [selectedCoat, setSelectedCoat] = useState('coat-0.png');
  const [selectedGlasses, setSelectedGlasses] = useState(null); // null means no selection
  const [selectedHat, setSelectedHat] = useState(null);
  const [selectedHelmet, setSelectedHelmet] = useState(null);

  return (
    <div className="flex">
      {/* Avatar Preview */}
      <div className="w-1/3 p-4 relative border">
        <h2 className="mb-2">Avatar Preview</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Helmet */}
        {selectedHelmet && (
          <img
            src={`/helmets/${selectedHelmet}`}
            alt="Helmet Preview"
            className="absolute top-0 left-0"
            style={{ zIndex: 5 }}
          />
        )}
        {/* Hat */}
        {selectedHat && (
          <img
            src={`/hats/${selectedHat}`}
            alt="Hat Preview"
            className="absolute top-0 left-0"
            style={{ zIndex: 4 }}
          />
        )}
        {/* Glasses */}
        {selectedGlasses && (
          <img
            src={`/glasses/${selectedGlasses}`}
            alt="Glasses Preview"
            className="absolute top-0 left-0"
            style={{ zIndex: 3 }}
          />
        )}
        {/* Coat */}
        <img
          src={`/coats/${selectedCoat}`}
          alt="Coat Preview"
          className="absolute top-0 left-0"
          style={{ zIndex: 2 }}
        />
        {/* Avatar */}
        <img
          src={`/avatars/${selectedAvatar}`}
          alt="Avatar Preview"
          className="absolute top-0 left-0"
          style={{ zIndex: 1 }}
        />
        </div>
      </div>

      {/* Parts Selector */}
      <div className="w-1/2 p-4">
        <h2 className="mb-2">Parts Selector</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Helmets */}
          <div>
            <h3 className="mb-2">Helmets</h3>
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 18 }, (_, index) => (
                <img
                  key={`helmet-${index}`}
                  src={`/helmets/helmet-${index}.png`}
                  alt={`Helmet ${index}`}
                  onClick={() => setSelectedHelmet(`helmet-${index}.png`)}
                  className={`cursor-pointer border ${selectedHelmet === `helmet-${index}.png` ? 'border-blue-500' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* Hats */}
          <div>
            <h3 className="mb-2">Hats</h3>
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 26 }, (_, index) => (
                <img
                  key={`hat-${index}`}
                  src={`/hats/hat-${index}.png`}
                  alt={`Hat ${index}`}
                  onClick={() => setSelectedHat(`hat-${index}.png`)}
                  className={`cursor-pointer border ${selectedHat === `hat-${index}.png` ? 'border-blue-500' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* Glasses */}
          <div>
            <h3 className="mb-2">Glasses</h3>
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 7 }, (_, index) => (
                <img
                  key={`glasses-${index}`}
                  src={`/glasses/glasses-${index}.png`}
                  alt={`Glasses ${index}`}
                  onClick={() => setSelectedGlasses(`glasses-${index}.png`)}
                  className={`cursor-pointer border ${selectedGlasses === `glasses-${index}.png` ? 'border-blue-500' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* Coats */}
          <div>
            <h3 className="mb-2">Coats</h3>
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 39 }, (_, index) => (
                <img
                  key={`coat-${index}`}
                  src={`/coats/coat-${index}.png`}
                  alt={`Coat ${index}`}
                  onClick={() => setSelectedCoat(`coat-${index}.png`)}
                  className={`cursor-pointer border ${selectedCoat === `coat-${index}.png` ? 'border-blue-500' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* Avatars */}
          <div>
            <h3 className="mb-2">Avatars</h3>
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 11 }, (_, index) => (
                <img
                  key={`avatar-${index}`}
                  src={`/avatars/avatar-${index}.png`}
                  alt={`Avatar ${index}`}
                  onClick={() => setSelectedAvatar(`avatar-${index}.png`)}
                  className={`cursor-pointer border ${selectedAvatar === `avatar-${index}.png` ? 'border-blue-500' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvatarEditor;
