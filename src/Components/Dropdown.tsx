import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import type { AppDispatch, RootState } from "@/store";
import { useSelector } from "react-redux";
import { logoutUser } from "@/Hooks/useAuth";
import { useDispatch } from "react-redux";

const Dropdown = () => {
  const { user } = useSelector((state: RootState) => state.Auth);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <DropdownMenu dir={"ltr"}>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <div className="rounded-full w-[45px] h-[45px] text-lg flex items-center justify-center font-semibold border-muted border-2">
          {user?.name.charAt(0)}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Username : {user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            dispatch(logoutUser());
          }}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
