import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllPost } from 'src/app/actions/postActions';
import { Dispatch } from 'redux';

interface Props {
  title: string;
  example?: any; //props's get in store must be option (can be null)
  getAllPostProps(): void
}

const Myfunc: React.FC<Props> = ({ title, example, getAllPostProps }) => {

  useEffect(() => {
    const x = getAllPostProps();
    console.log("x", x);
  }, [getAllPostProps])

  console.log("over", example);

  return (
    <div>
      hello! {title}
      {/* <span>{posts}</span> */}
    </div>
  );
};

//defined Type of State
const mapStateToProps = (state: any) => ({ 
  example: state.postState 
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getAllPostProps: () => dispatch(getAllPost())
});

//connect to the appStore
export default connect(mapStateToProps, mapDispatchToProps)(Myfunc);
