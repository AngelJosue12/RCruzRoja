import React, { useState, useEffect } from "react";
import { Table, Input, Space, Select } from "antd";

const { Search } = Input;
const { Option } = Select;  

const columns = [
  {
    title: "Nombre",
    dataIndex: "first_name",
    key: "first_name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Apellido",
    dataIndex: "last_name",
    key: "username",
  },
  {
    title: "Genero",
    dataIndex: "gender",
    key: "username",
  },
  {
    title: "Edad",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Grado",
    dataIndex: "grade",
    key: "grade",
  },
  {
    title: "Grupo",
    dataIndex: "group",
    key: "group",
  },
];
const Servicios = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filterGrade, setFilterGrade] = useState("");

const data=[
  
    {"id":1,"first_name":"José","last_name":"Hernández","email":"jhernandez0@tiny.cc","gender":"Genero Diverso","age":"10","group":"B", "grade":"3"},
    {"id":2,"first_name":"María","last_name":"González","email":"mgonzalez1@tiny.cc","gender":"Femenino","age":"11","group":"B", "grade":"3"},
    {"id":3,"first_name":"Juan","last_name":"Pérez","email":"jperez2@tiny.cc","gender":"Masculino","age":"12","group":"B", "grade":"3"},
    {"id":4,"first_name":"Ana","last_name":"Martínez","email":"amartinez3@tiny.cc","gender":"Femenino","age":"13","group":"A", "grade":"6"},
    {"id":5,"first_name":"Luis","last_name":"García","email":"lgarcia4@tiny.cc","gender":"Masculino","age":"14","group":"C", "grade":"6"},
    {"id":6,"first_name":"Carmen","last_name":"López","email":"clopez5@tiny.cc","gender":"Femenino","age":"15","group":"C", "grade":"5"},
    {"id":7,"first_name":"Manuel","last_name":"Torres","email":"mtorres6@tiny.cc","gender":"Masculino","age":"16","group":"A", "grade":"4"},
    {"id":8,"first_name":"Teresa","last_name":"Ramírez","email":"tramirez7@tiny.cc","gender":"Femenino","age":"17","group":"A", "grade":"3"},
    {"id":9,"first_name":"Javier","last_name":"Herrera","email":"jherrera8@tiny.cc","gender":"Masculino","age":"18","group":"A", "grade":"3"},
    {"id":10,"first_name":"Rosa","last_name":"Peña","email":"rpena9@tiny.cc","gender":"Femenino","age":"19","group":"B", "grade":"1"},
    {"id":11,"first_name":"Francisco","last_name":"Flores","email":"fflores10@tiny.cc","gender":"Masculino","age":"10","group":"C", "grade":"4"},
    {"id":12,"first_name":"Laura","last_name":"Mendoza","email":"lmendoza11@tiny.cc","gender":"Femenino","age":"21","group":"C", "grade":"3"},
    {"id":13,"first_name":"Sergio","last_name":"Castillo","email":"scastillo12@tiny.cc","gender":"Masculino","age":"22","group":"B", "grade":"3"},
    {"id":14,"first_name":"Isabel","last_name":"Ortiz","email":"iortiz13@tiny.cc","gender":"Femenino","age":"23","group":"C", "grade":"4"},
    {"id":15,"first_name":"Antonio","last_name":"Guzmán","email":"aguzman14@tiny.cc","gender":"Masculino","age":"24","group":"C", "grade":"1"},
    {"id":16,"first_name":"Patricia","last_name":"Morales","email":"pmorales15@tiny.cc","gender":"Femenino","age":"25","group":"C", "grade":"1"},
    {"id":17,"first_name":"Rafael","last_name":"Medina","email":"rmedina16@tiny.cc","gender":"Masculino","age":"26","group":"C", "grade":"3"},
    {"id":18,"first_name":"Marta","last_name":"Herrera","email":"mherrera17@tiny.cc","gender":"Femenino","age":"27","group":"B", "grade":"3"},
    {"id":19,"first_name":"Fernando","last_name":"Mendoza","email":"fmendoza18@tiny.cc","gender":"Género diverso","age":"8","group":"B", "grade":"3"},
    {"id":20,"first_name":"Beatriz","last_name":"Ramos","email":"bramos19@tiny.cc","gender":"Género diverso","age":"9","group":"B", "grade":"3"},
    {"id":21,"first_name":"Alberto","last_name":"Torres","email":"atorres20@tiny.cc","gender":"Género diverso","age":"5","group":"B", "grade":"3"},
    {"id":22,"first_name":"Susana","last_name":"Reyes","email":"sreyes21@tiny.cc","gender":"Femenino","age":"12","group":"B", "grade":"3"},
    {"id":23,"first_name":"Miguel","last_name":"Guerrero","email":"mguerrero22@tiny.cc","gender":"Masculino","age":"13","group":"B", "grade":"3"},
    {"id":24,"first_name":"Sofía","last_name":"Cortés","email":"scortes23@tiny.cc","gender":"Femenino","age":"7","group":"B", "grade":"3"},
    {"id":25,"first_name":"Carlos","last_name":"Santos","email":"csantos24@tiny.cc","gender":"Masculino","age":"9","group":"B", "grade":"3"},
    {"id":26,"first_name":"Silvia","last_name":"Díaz","email":"sdiaz25@tiny.cc","gender":"Femenino","age":"10","group":"B", "grade":"3"},
    {"id":27,"first_name":"Jorge","last_name":"Paredes","email":"jparedes26@tiny.cc","gender":"Género diverso","age":"12","group":"A", "grade":"3"},
    {"id":28,"first_name":"Lourdes","last_name":"Moreno","email":"lmoreno27@tiny.cc","gender":"Género diverso","age":"10","group":"A", "grade":"3"},
    {"id":29,"first_name":"Roberto","last_name":"Romero","email":"rromero28@tiny.cc","gender":"Género diverso","age":"38","group":"A", "grade":"3"},
    {"id":30,"first_name":"Alicia","last_name":"Peña","email":"apena29@tiny.cc","gender":"Género diverso","age":"9","group":"B", "grade":"3"},
    {"id":31,"first_name":"Carlos","last_name":"Rodríguez","email":"crodriguez30@tiny.cc","gender":"Género diverso","age":"8","group":"C", "grade":"3"}
]
const searcher = (e) => {
  setSearch(e.target.value);
};

const results = data.filter((user) => {
  return (
    (!search ||
      user.first_name.toLowerCase().includes(search.toLowerCase())) &&
    (!filterGender || user.gender === filterGender) &&
    (!filterGrade || user.grade === filterGrade)
  );
});

return (
  <>
    <div
      style={{
        maxWidth: "100%",
        width: "1000px",
        textAlign: "center",
        display: "block",
        margin: "23px",
      }}
    >
      <Space>
        <Search
          placeholder="Ingrese su busqueda"
          value={search}
          onChange={searcher}
          type="text"
          className="form-control"
        />
        <Select
          placeholder="Filtrar por género"
          value={filterGender}
          onChange={setFilterGender}
        >
          <Option value="">Genero</Option>
          <Option value="Masculino">Masculino</Option>
          <Option value="Femenino">Femenino</Option>
        </Select>
        <Select
          placeholder="Filtrar por grado"
          value={filterGrade}
          onChange={setFilterGrade}
        >
          <Option value="">Grado</Option>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
          <Option value="6">6</Option>
        </Select>
      </Space>

      <Table
        style={{ width: "850px", display: "block", margin: "50px" }}
        columns={columns}
        dataSource={results}
      />
    </div>
  </>
);
};

export default Servicios;














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