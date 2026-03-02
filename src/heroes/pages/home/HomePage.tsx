import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useState } from "react";
import { CustomPagination } from "@/components/custom/CustomPagination";

enum CharacterFilter {
  ALL = "all",
  FAVORITES = "favorites",
  HEROES = "heroes",
  VILLAINS = "villains",
}

export const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState<CharacterFilter>(
    CharacterFilter.ALL,
  );

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Superhero Universe"
        description="Descubre, explora y administra super héroes y villanos "
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Tabs */}
      <Tabs value={activeFilter} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger
            onClick={() => setActiveFilter(CharacterFilter.ALL)}
            value={CharacterFilter.ALL}
          >
            All Characters (16)
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setActiveFilter(CharacterFilter.FAVORITES)}
            value={CharacterFilter.FAVORITES}
            className="flex items-center gap-2"
          >
            Favorites (3)
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setActiveFilter(CharacterFilter.HEROES)}
            value={CharacterFilter.HEROES}
          >
            Heroes (12)
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setActiveFilter(CharacterFilter.VILLAINS)}
            value={CharacterFilter.VILLAINS}
          >
            Villains (2)
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <h1 className="text-2xl font-bold mb-4">All Characters</h1>
          {/* Character Grid */}
          <HeroGrid />
        </TabsContent>
        <TabsContent value="favorites">
          {/* Favorites Section */}
          <h1 className="text-2xl font-bold mb-4">Favorites</h1>
        </TabsContent>
        <TabsContent value="heroes">
          {/* Heroes Section */}
          <h1 className="text-2xl font-bold mb-4">Heroes</h1>
        </TabsContent>
        <TabsContent value="villains">
          {/* Villains Section */}
          <h1 className="text-2xl font-bold mb-4">Villains</h1>
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <CustomPagination totalPages={6} />
    </>
  );
};
