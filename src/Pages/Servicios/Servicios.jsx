import React, { useState, useMemo } from "react";
import { Table, Input, Space, Select } from "antd";

const { Search } = Input;
const { Option } = Select;

const columns = [
  {
    title: "Servicio",
    dataIndex: "servicio",
    key: "servicio",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Organización",
    dataIndex: "organizacion",
    key: "organizacion",
  },
  {
    title: "Ubicación",
    dataIndex: "ubicacion",
    key: "ubicacion",
  },
  {
    title: "Descripción",
    dataIndex: "descripcion",
    key: "descripcion",
  },
];

const Servicios = () => {
  const [search, setSearch] = useState("");
  const [filterOrganization, setFilterOrganization] = useState("");
  const [filterLocation, setFilterLocation] = useState("");

  const data=[
    {
      id: 1,
      servicio: "Equipo de Rescate Urbano",
      organizacion: "Cruz Roja Internacional",
      ubicacion: "Ciudad Metrópolis",
      descripcion: "Equipo especializado en rescate en entornos urbanos y estructuras colapsadas."
    },
    {
      id: 2,
      servicio: "Clínica Móvil de Atención Pediátrica",
      organizacion: "Cruz Roja Nacional",
      ubicacion: "Pueblo Soleado",
      descripcion: "Unidad móvil dedicada a brindar atención médica a niños y adolescentes en comunidades rurales."
    },
    {
      id: 3,
      servicio: "Unidad de Apoyo Psicosocial",
      organizacion: "Cruz Roja Local",
      ubicacion: "Villa Esperanza",
      descripcion: "Servicio que ofrece apoyo emocional y psicológico a personas afectadas por desastres o crisis."
    },
  
    {
      id: 4,
      servicio: "Centro de Donación de Sangre",
      organizacion: "Cruz Roja Regional",
      ubicacion: "Ciudad Saludable",
      descripcion: "Instalación dedicada a la recolección de sangre para emergencias médicas y transfusiones."
    },
    {
      id: 5,
      servicio: "Equipo de Logística para Emergencias",
      organizacion: "Cruz Roja Internacional",
      ubicacion: "Ciudad Logística",
      descripcion: "Equipo especializado en la gestión eficiente de recursos y suministros durante situaciones de emergencia."
    },
    {
      id: 6,
      servicio: "Centro de Rehabilitación Física",
      organizacion: "Cruz Roja Nacional",
      ubicacion: "Pueblo Renacer",
      descripcion: "Facilidad dedicada a la rehabilitación y fisioterapia para personas con discapacidades físicas temporales o permanentes."
    },
    {
      id: 7,
      servicio: "Brigada Canina de Búsqueda y Rescate",
      organizacion: "Cruz Roja Local",
      ubicacion: "Villa Canina",
      descripcion: "Unidad canina entrenada para la búsqueda y rescate de personas en áreas afectadas por desastres naturales."
    },
    {
      id: 8,
      servicio: "Servicio de Educación en Salud",
      organizacion: "Cruz Roja Regional",
      ubicacion: "Ciudad Educación",
      descripcion: "Programa educativo que proporciona información sobre salud, prevención de enfermedades y primeros auxilios a comunidades locales."
    },
    {
      id: 9,
      servicio: "Equipo de Intervención en Crisis",
      organizacion: "Cruz Roja Internacional",
      ubicacion: "Ciudad Esperanza",
      descripcion: "Grupo especializado en proporcionar apoyo inmediato y recursos durante crisis humanitarias para mitigar el impacto emocional en las personas afectadas."
    },
    {
      id: 10,
      servicio: "Unidad de Telemedicina",
      organizacion: "Cruz Roja Nacional",
      ubicacion: "Pueblo Conectado",
      descripcion: "Servicio que ofrece consultas médicas a distancia, brindando atención a comunidades remotas a través de tecnología de telemedicina."
    },
    {
      id: 11,
      servicio: "Equipo de Suministros de Emergencia",
      organizacion: "Cruz Roja Local",
      ubicacion: "Villa Abastecimiento",
      descripcion: "Equipo encargado de la distribución eficiente de suministros esenciales durante desastres y emergencias, garantizando una respuesta rápida y efectiva."
    },
    {
      id: 12,
      servicio: "Centro de Recuperación Nutricional",
      organizacion: "Cruz Roja Regional",
      ubicacion: "Ciudad Nutrición",
      descripcion: "Facilidad dedicada a la atención y recuperación de niños con desnutrición, proporcionando alimentos nutritivos y cuidado médico especializado."
    },
    {
      id: 13,
      servicio: "Equipo de Gestión de Información",
      organizacion: "Cruz Roja Internacional",
      ubicacion: "Ciudad Información",
      descripcion: "Grupo especializado en recopilar, analizar y gestionar información relevante durante crisis humanitarias para facilitar una toma de decisiones informada."
    },
    {
      id: 14,
      servicio: "Centro de Capacitación en Primeros Auxilios",
      organizacion: "Cruz Roja Nacional",
      ubicacion: "Pueblo Seguro",
      descripcion: "Instalación que ofrece cursos y capacitación en primeros auxilios a la comunidad, promoviendo la preparación y la respuesta rápida ante emergencias."
    }
  ]
  const filteredData = useMemo(() => {
    const searchLower = search.toLowerCase();
    
    return data.filter((item) => {
      const servicioLower = item.servicio.toLowerCase();
      const descripcionLower = item.descripcion.toLowerCase();

      return (
        (!search ||
          servicioLower.includes(searchLower) ||
          descripcionLower.includes(searchLower)) &&
        (!filterOrganization || item.organizacion === filterOrganization) &&
        (!filterLocation || item.ubicacion === filterLocation)
      );
    });
  }, [data, search, filterOrganization, filterLocation]);

  const uniqueLocations = useMemo(
    () => Array.from(new Set(data.map((item) => item.ubicacion))),
    [data]
  );

  const searcher = (value) => {
    setSearch(value);
  };

  return (
    <>
      <div
        style={{
          maxWidth: "100%",
          width: "1000px",
          textAlign: "center",
          display: "block",
          margin: "auto",
        }}
      >
        <Space>
          <Search
            placeholder="Ingrese su búsqueda"
            value={search}
            onChange={(e) => searcher(e.target.value)}
            type="text"
            className="form-control"
          />
          <Select
            placeholder="Filtrar por organización"
            value={filterOrganization}
            onChange={setFilterOrganization}
          >
            <Option value="">Organización</Option>
            <Option value="Cruz Roja Internacional">Cruz Roja Internacional</Option>
            <Option value="Cruz Roja Nacional">Cruz Roja Nacional</Option>
            <Option value="Cruz Roja Local">Cruz Roja Local</Option>
            <Option value="Cruz Roja Regional">Cruz Roja Regional</Option>
          </Select>
          <Select
            placeholder="Filtrar por ubicación"
            value={filterLocation}
            onChange={setFilterLocation}
          >
            <Option value="">Ubicación</Option>
            {uniqueLocations.map((location) => (
              <Option key={location} value={location}>
                {location}
              </Option>
            ))}
          </Select>
        </Space>

        <Table
          style={{ width: "100%", display: "block", margin: "auto" }}
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
        />
      </div>
    </>
  );
};

export default Servicios;
