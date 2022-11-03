import "./RightSide.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Transactions from "./Transactions/Transactions";
import { addItem, removeItem } from "../../../Store/reducers/reducer";

const initialValues = {
  title: "",
  category: "",
  amount: "",
};

const validationSchema = Yup.object({
  title: Yup.string().required("مقداری وارد نشده است"),
  category: Yup.string().required("گزینه ای انتخاب نشده"),
  amount: Yup.number().required("باید به صورت عدد باشد"),
});

const RightSide = ({ transactions }) => {
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    dispatch(addItem(values));
    resetForm({ values: "" });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  const Error = styled.div`
    position: absolute;
    contnet: "";
    left: 0%;
    top: 26%;
    color: #d9376e;
    font-size: 1.1rem;
  `;

  return (
    <section className="content">
      <form className="content-form" onSubmit={formik.handleSubmit}>
        <h4 className="content-form__title">معاملات</h4>
        <div className="content-form__box">
          <div className="content-form__box-inputs">
            <input
              type="text"
              placeholder="حقوق ، شارژ ، واریز ...."
              required
              name="title"
              id="title"
              {...formik.getFieldProps("title")}
            />
            {formik.touched.title && formik.errors.title && (
              <Error>!{formik.errors.title}</Error>
            )}
          </div>
          <div className="content-form__box-inputs">
            <select
              required
              name="category"
              id="category"
              {...formik.getFieldProps("category")}
            >
              <option value="هزینه">هزینه</option>
              <option value="درآمد">درآمد</option>
              <option value="پس انداز">پس انداز</option>
            </select>
            {formik.touched.category && formik.errors.category && (
              <Error>!{formik.errors.category}</Error>
            )}
          </div>
          <div className="content-form__box-inputs">
            <input
              type="number"
              placeholder="مبلغ ...."
              required
              name="amount"
              id="amount"
              {...formik.getFieldProps("amount")}
            />
            {formik.touched.amount && formik.errors.amount && (
              <Error>!{formik.errors.amount}</Error>
            )}
          </div>
          <button className="content-form__box-btn" disabled={!formik.isValid}>
            ثبت مبلغ
          </button>
        </div>
      </form>
      <div className="content-history">
        {transactions.length === 0 ? null : (
          <>
            <h4 className="content-history__title">تراکنش ها</h4>
            {transactions.map((tran) => (
              <Transactions
                key={tran.data.id}
                tran={tran}
                onRemove={() => dispatch(removeItem(tran))}
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default RightSide;
