import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../redux/Store/Store';
import Alert from '../../components/SearchCrypto/Alert';
import SearchedCrypto from '../../components/SearchCrypto/SearchedCrypto';
import SearchForm from '../../components/SearchCrypto/SearchForm';
import { setAlert } from '../../redux/Actions/alertActions';


const Search: FC = () => {
  const dispatch = useDispatch();
  const SearchCryptoData = useSelector((state: RootStore) => state.search.data);
  const loading = useSelector((state: RootStore) => state.search.loading);
  const alertMsg = useSelector((state: RootStore) => state.alert.message);
//console.log(SearchCryptoData)
    return (
      
      <div style={{ textAlign: "center", display: "column" }}>
        <header> <h1 style={{ height: "10vh", lineHeight: "10vh", verticalAlign: "middle", color: "#fff", background: "#0063cc", width: "100%" }}>Rechercher une crypto-monnaie</h1></header>
        <div style={{display:"flex"}}>
            <SearchForm/>
      {loading ? <h2 style={{margin:'auto'}}>Chargement...</h2> : SearchCryptoData && <SearchedCrypto data={SearchCryptoData} />}

      {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))} />}
</div>
    </div>
  );
}

export default Search;