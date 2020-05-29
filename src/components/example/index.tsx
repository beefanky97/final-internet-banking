import React from "react";
import { exampleService } from "src/api/exampleService";
import { connect } from "react-redux";

interface Props {
  title: string;
  example?: any; //props's get in store must be option (can be null)
}

const Myfunc: React.FC<Props> = ({ title, example }) => {
  const posts = exampleService.getAllPost();

  console.log("example selector", example)

  console.log("posts", posts);
  return (
    <div>
      hello! {title}
      {/* <span>{posts}</span> */}
    </div>
  );
};

//defined Type of State
const mapStateToProps = (state: any) => ({ 
  example: state.exampleSate 
});

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

//connect to the appStore
export default connect(mapStateToProps, null)(Myfunc);
