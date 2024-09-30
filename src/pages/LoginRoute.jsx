import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { validateEmail } from "../utils/validateEmail";
import SuccessModal from "../components/SuccessModal";
import useAuth from "../hooks/useAuth";

// eslint-disable-next-line react/prop-types
export default function LoginRoute({ navHeight, footerHeight }) {
  const { login, error: authError } = useAuth();
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (authError) {
      setErrorMessage(authError); // Set error message
      setSuccess(false); // Do not show success modal on error
    }
  }, [authError]);

  function handleSubmit(e) {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = pass.length >= 6;

    if (!isEmailValid) {
      setErrorMessage(
        "Este email no es válido o no está en nuestra base de datos"
      );
    } else if (!isPasswordValid) {
      setErrorMessage("El password debe tener más de 6 caracteres");
    } else {
      setErrorMessage(""); // Clear error message
      login({ email: email, password: pass })
        .then(() => {
          setSuccess(true); // Show success modal
        })
        .catch((err) => {
          setErrorMessage(err.message); // Handle login errors if necessary
        });
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

      {/* Show error here */}
      {errorMessage && (
        <Alert variant="danger" className="mt-3">
          {errorMessage}
        </Alert>
      )}

      <Card>
        <p>email: test@example.com pass: 123123</p>
        <Card.Body>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                placeholder="Ingresa tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <hr />
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Tu password</Form.Label>
              <Form.Control
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                required
                type="password"
                placeholder="Password"
              />
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
