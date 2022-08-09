import { useEffect, useState } from "react";
import {
  TableBody,
  CollectionTableHead,
  CollectionTableRow,
} from "../../components/Table";
import { TableLayout } from "../../layouts/TableLayout";
import { CollectionType } from "../../types/CollectionType";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { ViewIconComponent as ViewIcon } from "../../components/Icons";
import { SpinnerComponent as Spinner } from "../../components/Spinner";

export const HomeTablePage = () => {
  let displayId = 0;
  const [post, setPost] = useState([]);

  useEffect(() => {
    Axios.get("https://tscd-ignition.herokuapp.com/collections")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function createTableRow(collection: CollectionType) {
    const { id } = post[displayId];
    displayId++;
    const viewlink = `/collections/${displayId}/${id}`;

    return (
      <CollectionTableRow
        id={displayId}
        diseaseTerm={collection.diseaseTerm}
        title={collection.title}
        key={uuidv4()}
      >
        <Link to={viewlink}>
          <ViewIcon color="teal" />
        </Link>
      </CollectionTableRow>
    );
  }

  if (post.length === 0) {
    return <Spinner size="xl" color="teal" margin="60px 0px 60px 0px" />;
  } else {
    return (
      <TableLayout>
        <CollectionTableHead id="ID" field1="DISEASE TERM" field2="TITLE" />
        <TableBody>{post.map(createTableRow)}</TableBody>
      </TableLayout>
    );
  }
};
