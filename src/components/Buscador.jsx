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
      { model: 'UJ7500', year: '2017', series: 'Super UHD', available: true },
      { model: 'UJ7000', year: '2017', series: 'Super UHD', available: true },
      { model: 'UJ6700', year: '2017', series: 'Super UHD', available: true },
      { model: 'UJ6500', year: '2017', series: 'Super UHD', available: true },
      { model: 'UJ6300', year: '2017', series: 'Super UHD', available: true },
      { model: 'UJ6200', year: '2017', series: 'Super UHD', available: true },  
      
      // 2018 (muestra parcial para mantener el componente conciso)
      { model: 'W8', year: '2018', series: 'OLED W', available: true },
      { model: 'E8', year: '2018', series: 'OLED', available: true },
      { model: 'C8', year: '2018', series: 'OLED', available: true },
      { model: 'B8', year: '2018', series: 'OLED', available: true },
      { model: 'SK9500', year: '2018', series: 'OLED', available: true },
      { model: 'SK8500', year: '2018', series: 'OLED', available: true },
      { model: 'SK9000', year: '2018', series: 'OLED', available: true },
      { model: 'SK8100', year: '2018', series: 'OLED', available: true },
      { model: 'SK8000', year: '2018', series: 'OLED', available: true },
      { model: 'SK7900', year: '2018', series: 'OLED', available: true },
      { model: 'UK7500', year: '2018', series: 'OLED', available: true },
      { model: 'UK6900', year: '2018', series: 'OLED', available: true },
      { model: 'UK6700', year: '2018', series: 'OLED', available: true },
      { model: 'UK6500', year: '2018', series: 'OLED', available: true },
      { model: 'UK6400', year: '2018', series: 'OLED', available: true },
      { model: 'UK6300', year: '2018', series: 'OLED', available: true },
      { model: 'UK6200', year: '2018', series: 'OLED', available: true },
      { model: 'UK6100', year: '2018', series: 'OLED', available: true },
      
      // 2019 (muestra parcial)
      { model: 'R9', year: '2019', series: 'Rollable', available: true },
      { model: 'Z9', year: '2019', series: 'OLED', available: true },
      { model: 'W9', year: '2019', series: 'OLED', available: true },
      { model: 'E9', year: '2019', series: 'OLED', available: true },
      { model: 'C9', year: '2019', series: 'OLED', available: true },
      { model: 'B9', year: '2019', series: 'OLED', available: true },
      { model: 'SM99', year: '2019', series: 'OLED', available: true },
      { model: 'SM98', year: '2019', series: 'OLED', available: true },
      { model: 'SM95', year: '2019', series: 'OLED', available: true },
      { model: 'SM90', year: '2019', series: 'OLED', available: true },
      { model: 'SM86', year: '2019', series: 'OLED', available: true },
      { model: 'SM85', year: '2019', series: 'OLED', available: true },
      { model: 'SM81', year: '2019', series: 'OLED', available: true },
      { model: 'SM82', year: '2019', series: 'OLED', available: true },
      { model: 'UM7600', year: '2019', series: 'OLED', available: true },
      { model: 'UM7400', year: '2019', series: 'OLED', available: true },
      { model: 'UM7300', year: '2019', series: 'OLED', available: true },
      { model: 'UM7100', year: '2019', series: 'OLED', available: true },
      { model: 'LM6300', year: '2019', series: 'OLED', available: true },
      
      // 2020 (muestra parcial)
      { model: 'CX', year: '2020', series: 'OLED', available: true },
      { model: 'BX', year: '2020', series: 'OLED', available: true },
      { model: 'RX', year: '2020', series: 'OLED', available: true },
      { model: 'ZX', year: '2020', series: 'OLED', available: true },
      { model: 'WX', year: '2020', series: 'OLED', available: true },
      { model: 'GX', year: '2020', series: 'OLED', available: true },
      { model: 'NANO99', year: '2020', series: 'OLED', available: true },
      { model: 'NANO97', year: '2020', series: 'OLED', available: true },
      { model: 'NANO95', year: '2020', series: 'OLED', available: true },
      { model: 'NANO90', year: '2020', series: 'OLED', available: true },
      { model: 'NANO85', year: '2020', series: 'OLED', available: true },
      { model: 'NANO80', year: '2020', series: 'OLED', available: true },
      { model: 'UN85', year: '2020', series: 'OLED', available: true },
      { model: 'UN80', year: '2020', series: 'OLED', available: true },
      { model: 'UN74', year: '2020', series: 'OLED', available: true },
      { model: 'UN73', year: '2020', series: 'OLED', available: true },
      { model: 'UN71', year: '2020', series: 'OLED', available: true },
      
      // 2021 (muestra parcial)
      { model: 'C1', year: '2021', series: 'OLED', available: true },
      { model: 'G1', year: '2021', series: 'OLED', available: true },
      { model: 'Z1', year: '2021', series: 'OLED', available: true },
      { model: 'B1', year: '2021', series: 'OLED', available: true },
      { model: 'A1', year: '2021', series: 'OLED', available: true },
      { model: 'QNED99', year: '2021', series: 'OLED', available: true },
      { model: 'QNED95', year: '2021', series: 'OLED', available: true },
      { model: 'QNED90', year: '2021', series: 'OLED', available: true },
      { model: 'NANO99', year: '2021', series: 'OLED', available: true },
      { model: 'NANO96', year: '2021', series: 'OLED', available: true },
      { model: 'NANO90', year: '2021', series: 'OLED', available: true },
      { model: 'NANO91', year: '2021', series: 'OLED', available: true },
      { model: 'NANO92', year: '2021', series: 'OLED', available: true },
      { model: 'NANO85', year: '2021', series: 'OLED', available: true },
      { model: 'NANO86', year: '2021', series: 'OLED', available: true },
      { model: 'NANO88', year: '2021', series: 'OLED', available: true },
      { model: 'NANO80', year: '2021', series: 'OLED', available: true },
      { model: 'NANO81', year: '2021', series: 'OLED', available: true },
      { model: 'NANO77', year: '2021', series: 'OLED', available: true },
      { model: 'NANO75', year: '2021', series: 'OLED', available: true },
      { model: 'UP80', year: '2021', series: 'OLED', available: true },
      { model: 'UP77', year: '2021', series: 'OLED', available: true },
      { model: 'UP75', year: '2021', series: 'OLED', available: true },
    ],
    Samsung: [
      // 2017 (muestra parcial)
      { model: 'QMS9Y', year: '2017', series: '17TV PREMIUM', available: true },
      { model: 'QMQ9FR', year: '2017', series: '17TV PREMIUM', available: true },
      { model: 'QMQ9F', year: '2017', series: '17TV PREMIUM', available: true },
      { model: 'QMQ8CR', year: '2017', series: '17TV PREMIUM', available: true },
      { model: 'QMQ8C', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'QMQ7FVRE', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'QMQ7FRE', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'QMQ7FR', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'QMQ7FDR', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'QMQ7FD', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'QMQ7F', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'QMQ7CRE', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'QMQ7CR', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'QMQ7CDR', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'QMQ7CD', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'QMQ7C', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'QMQ6FRE', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMQS9', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU900R', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU9000', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU800R', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU8000', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU750R', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU7500', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU70AR', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU70A0', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU700R', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU7000', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU66A0', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU6500', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU64A0', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU6470', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU6400', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMLS003', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'ULS003U', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU66AR', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU650R', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU64AR', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU640R', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU6303', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU6302', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU6300', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU6310', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU6320', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU6103', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU6102', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU6100', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU6070', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMU6000', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMUF31E', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UMUF30E', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UM6303', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UM6302', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UM6300', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UM5603', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UM5602', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UM5600', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UM5523', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UM5522', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UM5520', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UM5513', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UM5512', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UM5510', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UM5503', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UM5502', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UM5500', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UM5300', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UM4500', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'UM4300', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'TH39S', year: '2017', series: '17TV STANDARD', available: true },
      { model: 'VF39S', year: '2017', series: '17TV STANDARD', available: true },
      
      
      // 2018 (muestra parcial)
      { model: 'QRQ900', year: '2018', series: '18TV PREMIUM', available: true },
      { model: 'QNQ9S', year: '2018', series: '18TV PREMIUM', available: true },
      { model: 'QNQ9F', year: '2018', series: '18TV PREMIUM', available: true },
      { model: 'QNQ8FB', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'QNQ8F', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'QNQ8C', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'QNQ7FH', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'QNQ7F', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'QNQ7C', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'QNQ75F', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'QNQ75C', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'QNQ6FK', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'QNQ6F', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'QNQ65FB', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'QNQ65F', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UNU850D', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UNU8500', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UNU80A0', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UNU800D', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UNU8000', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UNU76A0', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UNU7500', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UNU74A0', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UNU7450', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UNU7400', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'ULS03NU', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UNU730D', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UNU7300', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UNU710D', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UNU7103', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UNU7100', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'URU7000', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UNU7120', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UNU709D', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UNU7090', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UNU7080', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UNU7050', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UNU6950', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UN5510', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UN5500', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UN5350', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UN5305', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UN5300', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UN5200', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UN4510', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UN4500', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UN4350', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UN4310', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'UN4300', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'BERTB', year: '2018', series: '18TV STANDARD1', available: true },
      { model: 'BERTA', year: '2018', series: '18TV STANDARD1', available: true },
    ]
  };

  
  // Cuando cambia la marca seleccionada, actualizar los modelos disponibles
  useEffect(() => {
    if (selectedBrand) {
      setAllModels(tvData[selectedBrand] || []);
      setFilteredModels([]);
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
    } else {
      setFilteredModels([]);
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
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Verificador de Compatibilidad de TV</h1>
      
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
            placeholder="Ingrese el modelo de su TV"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={!selectedBrand}
          />
        </div>
      </div>
      
      {/* Resultados de compatibilidad */}
      {searchTerm && filteredModels.length > 0 && (
        <div className="mt-8">
          {filteredModels.map((model, index) => (
            <div key={index} className="mb-4 p-4 border rounded-lg shadow-sm">
              <div className="flex flex-col items-center mb-4">
                <div className="text-4xl font-bold mb-2">{model.model}</div>
                <div className="text-lg text-gray-600">{model.series} ({model.year})</div>
                
                {model.available ? (
                  <div className="mt-4 bg-green-100 text-green-800 px-6 py-3 rounded-full text-lg font-bold">
                    ¡Compatible! Este modelo es compatible
                  </div>
                ) : (
                  <div className="mt-4 bg-red-100 text-red-800 px-6 py-3 rounded-full text-lg font-bold">
                    No compatible con este servicio
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Mensaje cuando no hay resultados */}
      {searchTerm && filteredModels.length === 0 && selectedBrand && (
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
          <p className="text-yellow-700">No se encontraron modelos que coincidan con su búsqueda.</p>
          <p className="text-yellow-600 mt-2">Intente con otro modelo o verifique la ortografía.</p>
        </div>
      )}
      
      {/* Instrucciones iniciales */}
      {!searchTerm && selectedBrand && (
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
          <p className="text-blue-700">Ingrese el modelo de su TV para verificar compatibilidad.</p>
        </div>
      )}
    </div>
  );
};
export default Buscador;