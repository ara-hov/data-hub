import { FC } from "react"
import ContentHeader from "../../shareable/ContentHeader/ContentHeader"
import Columns from "./source-content/columns/Columns"
import ProductTable from "./source-content/product-table/ProductTable"

interface Props {
    
}

const Source:FC = (props: Props) => {
    return (
        <div>
            <ContentHeader title='Source 1'/>
            <ProductTable />
            <Columns />
        </div>
    )
}

export default Source
