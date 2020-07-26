import React, { useState, useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

interface Props {
  cards: Object[];
}

interface Object {
  card_number: number;
  id_type_card: number;
  balance: number;
}

const InfoCard: React.FC<Props> = (props) => {
  const [card, setCard] = useState({
    card_number: 0,
    id_type_card: 1,
    balance: 0,
  });

  const findCard = (cards: Object[]) => {
    const atm_card = cards.find((item) => item.id_type_card === 1);
    console.log("cards", props.cards);
    console.log("atm", atm_card);
    if (atm_card) {
      setCard(atm_card);
    }
  };

  useEffect(() => {
    findCard(props.cards);
  }, [props.cards]);

  const showCardSaving = (cards: Object[]) =>
    // eslint-disable-next-line array-callback-return
    cards.map((c: any, i: number) => {
      if (c.id_type_card === 2) {
        return (
          <tr key={i}>
            <td>{i}</td>
            <td>{c.card_number}</td>
            <td>{c.balance} VNĐ</td>
            <td>
              <Link
                className="btn-custom"
                to={`/teller/add-money-customer?card_number=${c.card_number}`}
              >
                <span style={{ marginLeft: 5 }}>Nạp tiền</span>
              </Link>
            </td>
          </tr>
        );
      }
    });

  return (
    <div
      className="col-lg-6 accordions mb-100"
      id="accordion"
      role="tablist"
      aria-multiselectable="true"
    >
      <h4 className="mb-50">Thông tin thẻ</h4>
      <div className="panel single-accordion">
        <h6>
          <a
            role="button"
            className="collapsed"
            aria-expanded="true"
            aria-controls="collapseOne"
            data-parent="#accordion"
            data-toggle="collapse"
            href="#collapseOne"
            style={{ backgroundColor: "#FFCA28" }}
          >
            Thẻ thanh toán
            <span className="accor-open">
              <i className="fa fa-plus" aria-hidden="true"></i>
            </span>
            <span className="accor-close">
              <i className="fa fa-minus" aria-hidden="true"></i>
            </span>
          </a>
        </h6>
        <div id="collapseOne" className="accordion-content collapse">
          <div style={{ padding: "30px" }}>
            <table className="table table-light table-hover table-striped">
              <thead>
                <tr className="table-warning">
                  <th>STT</th>
                  <th>Số tài khoản</th>
                  <th>Số dư</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    {props.cards.find((x) => x.id_type_card === 1)?.card_number}
                  </td>
                  <td>
                    {props.cards.find((x) => x.id_type_card === 1)?.balance} VNĐ
                  </td>
                  <td>
                    {/* <button className="btn-custom" type="button" onClick={() => onHandleAddMoney()}>
                      <span>Nạp tiền</span>
                    </button> */}
                    <Link
                      className="btn-custom"
                      to={`/teller/add-money-customer?card_number=${
                        props.cards.find((x) => x.id_type_card === 1)
                          ?.card_number
                      }`}
                    >
                      <span style={{ marginLeft: 5 }}>Nạp tiền</span>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="panel single-accordion">
        <h6>
          <a
            role="button"
            className="collapsed"
            aria-expanded="true"
            aria-controls="collapseTwo"
            data-parent="#accordion"
            data-toggle="collapse"
            href="#collapseTwo"
            style={{ backgroundColor: "#FFCA28" }}
          >
            Thẻ tiết kiệm
            <span className="accor-open">
              <i className="fa fa-plus" aria-hidden="true"></i>
            </span>
            <span className="accor-close">
              <i className="fa fa-minus" aria-hidden="true"></i>
            </span>
          </a>
        </h6>
        <div id="collapseTwo" className="accordion-content collapse">
          <div style={{ padding: "30px" }}>
            <table className="table table-light table-hover table-striped">
              <thead>
                <tr className="table-warning">
                  <th>STT</th>
                  <th>Số tài khoản</th>
                  <th>Số dư</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>{showCardSaving(props.cards)}</tbody>
            </table>
          </div>
        </div>
      </div>

      <Link
        className="btn credit-btn mt-30 mr-15"
        to={`/history-transaction?card_number=${card.card_number}`}
      >
        Xem lịch sử giao dịch
      </Link>
      <Link className="btn credit-btn mt-30" to={`/debt-reminder/add`}>
        Thêm một nhắc nợ
      </Link>
    </div>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(InfoCard);
