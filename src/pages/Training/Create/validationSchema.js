import * as Yup from "yup";
import moment from  "moment";

export default Yup.object().shape({
    name: Yup.string().required("Campo obrigatório"),
    goal: Yup.number().min(1)
      .nullable("Campo obrigatório")
      .typeError("Campo obrigatório")
      .required("Campo obrigatório"),
    validity: Yup.date().nullable("Campo obrigatório")
      .typeError("Campo obrigatório")
      .test("Date is after", "", function(value){
        return moment(new Date).isBefore(value)
      })
      .required("Campo obrigatório"),
    trainings: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required("Campo obrigatório"),
        exercises: Yup.array().of(
          Yup.object().shape({
            id: Yup.string().required("Campo obrigatório"),
            series: Yup.number().nullable("Campo obrigatório")
              .typeError("Campo obrigatório")
              .required("Campo obrigatório"),
            repetitions: Yup.string().required("Campo obrigatório"),
            rest: Yup.number().typeError("Campo obrigatório")
            .required("Campo obrigatório")
            .required("Campo obrigatório")
          })
        )
      })
    )
  });
