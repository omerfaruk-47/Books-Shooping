import { useSearchParams } from "react-router-dom";

const FilterArea = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    //eklenilecek parametreyi belire
    searchParams.set("sırala", e.target.value);
    //url 'i güncelle
    setSearchParams(searchParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //eklenilecek parametreyi belire
    searchParams.set("aramaTerimi", e.target[0].value);
    //url 'i güncelle
    setSearchParams(searchParams);
  };
  return (
    <div className="mt-4 gap-3 d-flex justify-content-between align-items-center">
      <div className="d-flex gap-3 align-items-center">
        <label>Sırala</label>
        <select onChange={handleChange} className="form-select">
          <option>a-z</option>
          <option>z-a</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          className="form-control"
          placeholder="kitap ismi giriniz"
          type="text"
        />

        <button className="btn btn-primary">Ara</button>
      </form>
    </div>
  );
};

export default FilterArea;
