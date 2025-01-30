import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div className="categories-container">
            <h1>What kind of food do you like?</h1>
            {['SEAFOOD', 'ITALIAN', 'ALL', 'SALADS', 'APPETIZERS'].
            map((category, index) => <Filter category={category} key={index} />)}
        </div>
    )
}
export default AllCategories;