import { useLocation } from "react-router-dom";

const ThankYouPage = () => {
  const location = useLocation();

  const userValues = {
    name: location.state.name,
    email: location.state.email,
    emailed: location.state.emailResponses,
  };

  return (
    <div>
      Thanks, {userValues.name}.
      <p>
        Your responses were recorded and will help me prep for our one
        on one.
      </p>
      <div>
        {userValues.emailed &&
          `Your responses were sent to ${userValues.email}`}
      </div>
    </div>
  );
};

export default ThankYouPage;
