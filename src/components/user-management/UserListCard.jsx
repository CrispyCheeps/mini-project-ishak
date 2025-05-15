import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const UserListCard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="w-[300px] hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
      onClick={() => navigate(`/mini-project/user-list?id=${user.id}`)}
    >
      <CardHeader>
        <CardTitle>
          {user.first_name} {user.last_name}
        </CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          className="w-full h-full rounded-lg"
        />
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};

export default UserListCard;
