export function verifyUserData(props: {
  user: {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
  };
}) {
  const { email, name, password, confirmPassword } = props.user;

  if (!email || !name || !password || !confirmPassword) {
    throw new Error("Preencha todos os campos.");
  }

  if (password !== confirmPassword) {
    throw new Error("Senhas devem ser iguais.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Formato de email inválido.");
  }
}

export function verifyRestaurantData(props: {
  restaurant: {
    name: string;
    location: string;
    phone: string;
    contacts: string;
    description: string;
    schedule: string;
    ownerEmail: string;
  };
}) {
  const { name, location, phone, contacts, description, schedule, ownerEmail } =
    props.restaurant;

  if (
    !name ||
    !location ||
    !phone ||
    !contacts ||
    !description ||
    !schedule ||
    !ownerEmail
  ) {
    throw new Error("Preencha todos os campos.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d+$/;

  if (!emailRegex.test(ownerEmail)) {
    throw new Error("Formato de email inválido.");
  }

  if (!phoneRegex.test(phone)) {
    throw new Error("Número de telefone deve contar apenas números.");
  }
}
