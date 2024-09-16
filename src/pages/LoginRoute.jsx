import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { validateEmail } from "../utils/validateEmail";
import SuccessModal from "../components/SuccessModal";
import useAuth from "../hooks/useAuth";

// eslint-disable-next-line react/prop-types
export default function LoginRoute({ navHeight, footerHeight }) {
  const { login } = useAuth();
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState({ type: "", msg: "" });

  function handleSubmit(e) {
    e.preventDefault();
    setIsFormSubmitted(true);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = pass.length >= 6;

    if (!isEmailValid) {
      setErrorMessage({
        type: "email",
        msg: "Este email no es valido o no esta en nuestra base de datos",
      });
    } else if (!isPasswordValid) {
      setErrorMessage({
        type: "pass",
        msg: "El pass debe tener mas de 6 caracteres",
      });
    } else {
      setSuccess(true);
      setErrorMessage({ type: "", msg: "" });
      login();
    }
  }

  return (
    <Container
      style={{
        alignContent: "center",
        minHeight: `calc(100vh - ${navHeight} - ${footerHeight})`,
      }}
    >
      {success && <SuccessModal isOpen={true} msg={`Bienvenido(a) ${email}`} />}
      <Card>
        <Card.Body>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                placeholder="Ingresa tu email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {isFormSubmitted && errorMessage.type === "email" && (
                <Alert variant="danger">{errorMessage.msg}</Alert>
              )}
            </Form.Group>
            <hr />
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Tu password</Form.Label>
              <Form.Control
                onChange={(e) => setPass(e.target.value)}
                required
                type="password"
                placeholder="Password"
              />
              {isFormSubmitted && errorMessage.type === "pass" && (
                <Alert variant="danger">{errorMessage.msg}</Alert>
              )}
            </Form.Group>
            <hr />
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
