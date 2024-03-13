const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      vehicles: [],
      planets: [],
    },
    actions: {
      loadPeople: () => {
        const peoplePromises = Array.from({ length: 4 }, (_, i) =>
          fetch(`https://www.swapi.tech/api/people/${i + 1}`)
            .then((response) => response.json())
            .then((data) => data.result)
            .catch((error) => console.error(error))
        );

        Promise.all(peoplePromises)
          .then((people) => setStore({ ...getStore(), people }))
          .catch((error) => console.error(error));
      },
      loadPlanets: () => {
        const planetsPromises = Array.from({ length: 4 }, (_, i) =>
          fetch(`https://www.swapi.tech/api/planets/${i + 1}`)
            .then((response) => response.json())
            .then((data) => data.result)
            .catch((error) => console.error(error))
        );

        Promise.all(planetsPromises)
          .then((planets) => setStore({ ...getStore(), planets }))
          .catch((error) => console.error(error));
      },

      loadVehicles: () => {
        const vehicleIds = [4, 6, 7, 8];
        const vehiclesPromises = vehicleIds.map((id) =>
          fetch(`https://www.swapi.tech/api/vehicles/${id}`)
            .then((response) => response.json())
            .then((data) => data.result)
            .catch((error) => console.error(error))
        );

        Promise.all(vehiclesPromises)
          .then((vehicles) => setStore({ ...getStore(), vehicles }))
          .catch((error) => console.error(error));
      },

      addFavorite: (item) => {
        const store = getStore();
        const favorites = store.favorites || [];
        setStore({ ...store, favorites: [...favorites, item] });
      },
      removeFavorite: (item) => {
        const store = getStore();
        const favorites = store.favorites || [];
        setStore({
          ...store,
          favorites: favorites.filter((fav) => fav !== item),
        });
      },
    },
  };
};

export default getState;
