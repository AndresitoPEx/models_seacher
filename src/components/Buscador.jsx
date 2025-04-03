import React, { useState, useEffect } from 'react';

const Buscador = () => {
  // Estados para manejar la selección y búsqueda
  const [selectedBrand, setSelectedBrand] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredModels, setFilteredModels] = useState([]);
  const [allModels, setAllModels] = useState([]);

  // Datos de los modelos de TV
  const tvData = {
    LG: [
      // 2016
      { model: 'G6', year: '2016', series: 'OLED', available: true },
      { model: 'E6', year: '2016', series: 'OLED', available: true },
      { model: 'C6', year: '2016', series: 'OLED', available: true },
      { model: 'B6', year: '2016', series: 'OLED', available: true },
      { model: 'UH95', year: '2016', series: 'Super UHD', available: true },
      { model: 'UH85', year: '2016', series: 'Super UHD', available: true },
      { model: 'U77', year: '2016', series: 'Super UHD', available: true },
      { model: 'UH75', year: '2016', series: 'UHD TV', available: true },
      { model: 'UH66', year: '2016', series: 'UHD TV', available: true },
      { model: 'UH65', year: '2016', series: 'UHD TV', available: true },
      { model: 'UH63', year: '2016', series: 'UHD TV', available: true },
      { model: 'UH62', year: '2016', series: 'UHD TV', available: true },
      { model: 'UH61', year: '2016', series: 'UHD TV', available: true },
      { model: 'UH60', year: '2016', series: 'UHD TV', available: true },
      { model: 'LH60', year: '2016', series: 'HD TV', available: true },
      { model: 'LH5x', year: '2016', series: 'HD TV', available: true },
      
      // 2017
      { model: 'W7', year: '2017', series: 'OLED W', available: true },
      { model: 'G7', year: '2017', series: 'OLED', available: true },
      { model: 'E7', year: '2017', series: 'OLED', available: true },
      { model: 'C7', year: '2017', series: 'OLED', available: true },
      { model: 'B7', year: '2017', series: 'OLED', available: true },
      { model: 'SJ9500', year: '2017', series: 'Super UHD', available: true },
      { model: 'SJ8500', year: '2017', series: 'Super UHD', available: true },
      { model: 'SJ8100', year: '2017', series: 'Super UHD', available: true },
      { model: 'SJ8000', year: '2017', series: 'Super UHD', available: true },
      
      // 2018 (muestra parcial para mantener el componente conciso)
      { model: 'W8', year: '2018', series: 'OLED W', available: true },
      { model: 'E8', year: '2018', series: 'OLED', available: true },
      { model: 'C8', year: '2018', series: 'OLED', available: true },
      { model: 'B8', year: '2018', series: 'OLED', available: true },
      
      // 2019 (muestra parcial)
      { model: 'R9', year: '2019', series: 'Rollable', available: true },
      { model: 'Z9', year: '2019', series: 'OLED', available: true },
      
      // 2020 (muestra parcial)
      { model: 'CX', year: '2020', series: 'OLED', available: true },
      { model: 'BX', year: '2020', series: 'OLED', available: true },
      
      // 2021 (muestra parcial)
      { model: 'C1', year: '2021', series: 'OLED', available: true },
      { model: 'G1', year: '2021', series: 'OLED', available: true },
    ],
    Samsung: [
      // 2017 (muestra parcial)
      { model: 'QMS9Y', year: '2017', series: '17TV PREMIUM', available: true },
      { model: 'QMQ9FR', year: '2017', series: '17TV PREMIUM', available: true },
      { model: 'QMQ9F', year: '2017', series: '17TV PREMIUM', available: true },
      { model: 'QMQ8CR', year: '2017', series: '17TV PREMIUM', available: true },
      { model: 'UMU9000', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU8000', year: '2017', series: '17TV STANDARD', available: true },
      
      // 2018 (muestra parcial)
      { model: 'QRQ900', year: '2018', series: '18TV PREMIUM', available: true },
      { model: 'QNQ9S', year: '2018', series: '18TV PREMIUM', available: true },
      { model: 'QNQ9F', year: '2018', series: '18TV PREMIUM', available: true },
      { model: 'UNU8500', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UNU8000', year: '2018', series: '18TV STANDARD1', available: true },
    ]
  };

  // Cuando cambia la marca seleccionada, actualizar los modelos disponibles
  useEffect(() => {
    if (selectedBrand) {
      setAllModels(tvData[selectedBrand] || []);
      setFilteredModels(tvData[selectedBrand] || []);
      setSearchTerm('');
    } else {
      setAllModels([]);
      setFilteredModels([]);
    }
  }, [selectedBrand]);

  // Filtrar modelos basados en el término de búsqueda
  useEffect(() => {
    if (selectedBrand && searchTerm) {
      const filtered = allModels.filter(model => 
        model.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        model.year.includes(searchTerm) ||
        model.series.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredModels(filtered);
    } else if (selectedBrand) {
      setFilteredModels(allModels);
    }
  }, [searchTerm, allModels, selectedBrand]);

  // Manejar cambio de marca
  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  // Manejar cambio en la búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Selector de Modelos de TV</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Selector de marca */}
        <div className="w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
            Marca de TV:
          </label>
          <select
            id="brand"
            value={selectedBrand}
            onChange={handleBrandChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Seleccione una marca</option>
            <option value="LG">LG</option>
            <option value="Samsung">Samsung</option>
          </select>
        </div>
        
        {/* Buscador de modelos */}
        <div className="w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="search">
            Buscar Modelo:
          </label>
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Ingrese modelo, año o serie"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={!selectedBrand}
          />
        </div>
      </div>
      
      {/* Resultados */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          {selectedBrand ? `Modelos de ${selectedBrand}` : 'Seleccione una marca para ver modelos'}
        </h2>
        
        {selectedBrand && filteredModels.length === 0 && (
          <p className="text-gray-500 italic">No se encontraron modelos que coincidan con su búsqueda.</p>
        )}
        
        {filteredModels.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left">Modelo</th>
                  <th className="py-3 px-4 text-left">Año</th>
                  <th className="py-3 px-4 text-left">Serie</th>
                  <th className="py-3 px-4 text-left">Disponibilidad</th>
                </tr>
              </thead>
              <tbody>
                {filteredModels.map((model, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 border-b border-gray-200 font-medium">{model.model}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{model.year}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{model.series}</td>
                    <td className="py-3 px-4 border-b border-gray-200">
                      <span 
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          model.available 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {model.available ? 'Disponible' : 'No Disponible'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Buscador;