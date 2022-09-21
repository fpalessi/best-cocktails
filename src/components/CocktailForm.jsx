import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import { useState } from "react";
import useCategory from "../hooks/useCategory";
import useCocktail from "../hooks/useCocktail";

const CocktailForm = () => {
  const [search, setSearch] = useState({
    name: "",
    category: "",
  });
  const [alert, setAlert] = useState("");
  const { categories } = useCategory();
  const { getCocktail } = useCocktail();

  // Handles
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validations
    if (Object.values(search).includes("")) {
      setAlert("Rellena todos los campos");
      return;
    }
    // Clear
    setAlert("");
    // API
    getCocktail(search);
  };

  // Form.Group so we group label & input
  return (
    <Form onSubmit={handleSubmit}>
      {alert && (
        <Alert variant="danger" className="text-center">
          {alert}
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Nombre</Form.Label>
            <Form.Control
              id="name"
              type="text"
              placeholder="Ej: Whisky, Vodka, Ginebra, Ron, Tequila, ..."
              name="name"
              value={search.name}
              onChange={(e) =>
                setSearch({ ...search, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="category">Categoría</Form.Label>
            <Form.Select
              id="category"
              name="category"
              value={search.category}
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option>Selecciona una Categoría</option>
              {categories.map((category) => (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button className="search" type="submit">
            Buscar cocktail
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CocktailForm;
