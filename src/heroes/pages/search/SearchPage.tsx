import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { SearchControl } from "./ui/SearchControl";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busqueda de super héroes"
        description="Descubre, explora y administra super héroes y villanos "
      />
      <SearchControl />
    </>
  );
};

export default SearchPage;
