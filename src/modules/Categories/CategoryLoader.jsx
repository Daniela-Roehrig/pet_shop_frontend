import Loader from '../../shared/components/Loader/Loader';
import Spinner from '../../shared/components/Spinner/Spinner';

const CategoryLoader = ({ loading, error }) => (
    <Loader>
        {loading && <Spinner />}
        {error && <p>Error: {error}</p>}
    </Loader>
);

export default CategoryLoader;
