import { useState } from 'react';

function AvatarEditor() {
  const [selectedAvatar, setSelectedAvatar] = useState('avatar-0.png');
  const [selectedCoat, setSelectedCoat] = useState('coat-0.png');
  const [selectedGlasses, setSelectedGlasses] = useState(null); // null means no selection
  const [selectedHat, setSelectedHat] = useState(null);
  const [selectedHelmet, setSelectedHelmet] = useState(null);

  const handleSelectHelmet = (index) => {
    setSelectedHelmet((prev) => (prev === `helmet-${index}.png` ? null : `helmet-${index}.png`));
  };

  const handleSelectHat = (index) => {
    setSelectedHat((prev) => (prev === `hat-${index}.png` ? null : `hat-${index}.png`));
  };

  const handleSelectGlasses = (index) => {
    setSelectedGlasses((prev) => (prev === `glasses-${index}.png` ? null : `glasses-${index}.png`));
  };

  const handleSelectCoat = (index) => {
    setSelectedCoat(`coat-${index}.png`);
  };

  const handleSelectAvatar = (index) => {
    setSelectedAvatar(`avatar-${index}.png`);
  };

  return (
    <div className="flex  flex-row">
      {/* Avatar Preview */}
      <div className="w-full md:w-1/2 md:h-1/2 p-4 relative mb-4 md:mb-0">
        <h2 className="mb-2 text-center">Avatar Preview</h2>
        <div className="relative">
          {/* Glasses */}
          {selectedGlasses && (
            <img
              src={`/glasses/${selectedGlasses}`}
              alt="Glasses Preview"
              className="absolute top-0 left-0 w-full"
              style={{ zIndex: 5 }}
            />
          )}
          {/* Hat */}
          {selectedHat && (
            <img
              src={`/hats/${selectedHat}`}
              alt="Hat Preview"
              className="absolute top-0 left-0 w-full"
              style={{ zIndex: 4 }}
            />
          )}
          {/* Helmet */}
          {selectedHelmet && (
            <img
              src={`/helmets/${selectedHelmet}`}
              alt="Helmet Preview"
              className="absolute top-0 left-0 w-full"
              style={{ zIndex: 3 }}
            />
          )}
          {/* Coat */}
          <img
            src={`/coats/${selectedCoat}`}
            alt="Coat Preview"
            className="absolute top-0 left-0 w-full"
            style={{ zIndex: 2 }}
          />
          {/* Avatar */}
          <img
            src={`/avatars/${selectedAvatar}`}
            alt="Avatar Preview"
            className="absolute top-0 left-0 w-full"
            style={{ zIndex: 1 }}
          />
        </div>
      </div>

      {/* Parts Selector */}
      <div className="w-full md:w-1/2 p-4 overflow-y-auto">
        <h2 className="mb-2 text-center">Parts Selector</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Helmets */}
          <div>
            <h3 className="mb-2 text-center">Helmets</h3>
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 18 }, (_, index) => (
                <img
                  key={`helmet-${index}`}
                  src={`/helmets/helmet-${index}.png`}
                  alt={`Helmet ${index}`}
                  onClick={() => handleSelectHelmet(index)}
                  className={`cursor-pointer border ${
                    selectedHelmet === `helmet-${index}.png` ? 'border-blue-500' : ''
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Hats */}
          <div>
            <h3 className="mb-2 text-center">Hats</h3>
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 26 }, (_, index) => (
                <img
                  key={`hat-${index}`}
                  src={`/hats/hat-${index}.png`}
                  alt={`Hat ${index}`}
                  onClick={() => handleSelectHat(index)}
                  className={`cursor-pointer border ${
                    selectedHat === `hat-${index}` ? 'border-blue-500' : ''
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Glasses */}
          <div>
            <h3 className="mb-2 text-center">Glasses</h3>
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 7 }, (_, index) => (
                <img
                  key={`glasses-${index}`}
                  src={`/glasses/glasses-${index}.png`}
                  alt={`Glasses ${index}`}
                  onClick={() => handleSelectGlasses(index)}
                  className={`cursor-pointer border ${
                    selectedGlasses === `glasses-${index}.png` ? 'border-blue-500' : ''
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Coats */}
          <div>
            <h3 className="mb-2 text-center">Coats</h3>
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 39 }, (_, index) => (
                <img
                  key={`coat-${index}`}
                  src={`/coats/coat-${index}.png`}
                  alt={`Coat ${index}`}
                  onClick={() => handleSelectCoat(index)}
                  className={`cursor-pointer border ${
                    selectedCoat === `coat-${index}.png` ? 'border-blue-500' : ''
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Avatars */}
          <div>
            <h3 className="mb-2 text-center">Avatars</h3>
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 11 }, (_, index) => (
                <img
                  key={`avatar-${index}`}
                  src={`/avatars/avatar-${index}.png`}
                  alt={`Avatar ${index}`}
                  onClick={() => handleSelectAvatar(index)}
                  className={`cursor-pointer border ${
                    selectedAvatar === `avatar-${index}.png` ? 'border-blue-500' : ''
                  }`}
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
