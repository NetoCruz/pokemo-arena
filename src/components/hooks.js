function useAsyncHook(searchBook) {
  const [result, setResult] = React.useState([]);
  const [loading, setLoading] = React.useState("false");

  React.useEffect(() => {
    async function fetchBookList() {
      try {
        setLoading("true");
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=10'
        );

        const json = await response.json();
        //console.log(json);
        setResult(
          json.results.map(item => {
            console.log(item.name);
            return item.name;
          }),
        );
      } catch (error) {
        setLoading("null");
      }
    }
  }, [fetchBookList]);

  return [result, loading];
}
