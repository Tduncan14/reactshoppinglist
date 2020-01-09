import React,{Component} from 'react';


const WithDataFetching = props => WrappedComponent => {
 
 class WithDataFetching extends Component{


    constructor(){
        super()

        this.setState ={
            data:[],
            loading:false,
            error:''
        };
    }


    async componentDidMount(){

        try{
            const data = await fetch(props.dataSource);

            const dataJSON = data.json();

           
            if(dataJSON){
                this.setState({
                    loading:false,
                    loading:false
                })
            }
        }

        catch(error){
            this.setState({
                loading:false,
                error:error.message
            })
        }
    }




    render(){
        const {data,loading,error} = this.state;

        return(
            <WrappedComponent 
             data={data}
             loading ={loading}
             error ={error}
             {...this.props} />

        );
    }

 }

  WithDataFetching.displayName =`WithDataFetching(${WrappedComponent.name})`


  return WithDataFetching
}


export default WithDataFetching;