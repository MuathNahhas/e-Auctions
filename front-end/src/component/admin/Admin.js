import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import swal from "sweetalert";
import axios from "axios";
import "../admin/Admin.css";
export const Admin = () => {
  const [auction, setAuction] = useState();
  const Delete = (e, index) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:5000/auctions/${e}`)
          .then((result) => {
            if (result.data.success) {
              let arr = [...auction];
              arr.splice(index, 1);
              setAuction([...arr]);
            }
          })
          .catch((err) => {
            console.log(err);
          });
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/auctions`)
      .then((res) => {
        setAuction(res.data.result);
        console.log(res.data.result);
        console.log(res.data.result[0].is_deleted);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const priceBodyTemplate = (auction) => {
    return formatCurrency(auction.starter_bid);
  };
  const imageBodyTemplate = (auction) => {
    return (
      <img
        src={`${auction.image}`}
        alt={auction.image}
        className="product-image"
      />
    );
  };

  const statusBodyTemplate = (auction) => {
    return (
      <Button
        label="Delete"
        icon="pi pi-trash"
        onClick={() => Delete(auction.auction_id)}
      />
    );
  };

  const header = <div className="table-header">All Auction</div>;
  const footer = `In total there are ${auction ? auction.length : 0} products.`;

  return (
    <div className="datatable-templating-demo">
      <div className="card">
        <DataTable value={auction} header={header} footer={footer}>
          <Column field="user_id" header="AuctionId"></Column>
          <Column header="Image" body={imageBodyTemplate}></Column>
          <Column
            field="price"
            header="StarterBid"
            body={priceBodyTemplate}
          ></Column>
          <Column field="title" header="Title"></Column>
          <Column field="user_id" header="OwnerId"></Column>
          <Column header="Delete" body={statusBodyTemplate}></Column>
        </DataTable>
      </div>
    </div>
  );
};
