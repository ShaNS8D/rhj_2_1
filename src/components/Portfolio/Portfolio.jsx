import { Component } from "react";
import Toolbar from "../Toolbar/Toolbar";
import ProjectList from "../ProjectList/ProjectList";

const initial = [{
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
    category: "Flayers"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
    category: "Flayers"
  }];

const filterList = ["All", "Websites", "Flayers", "Business Cards"];

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: initial,
      currentFilter: "All",
    };
  }

  handleFilter = (filter) => {
    this.setState({ currentFilter: filter });
  };

  render() {
    const { data, currentFilter } = this.state;
    const filteredData = currentFilter === "All"
      ? data
      : data.filter(item => item.category === currentFilter);

    return (
      <>
        <Toolbar
          filters={filterList}
          selected={currentFilter}
          onSelectFilter={this.handleFilter}
        />
        <ProjectList projects={filteredData} />
      </>
    );
  }
}

// const Portfolio = () => {
//   const [data, setData] = useState(initial);
//   const [currentFilter, setCurrentFilter] = useState("All");
//   const handleFilter = (filter) => {
//     setCurrentFilter(filter);
//   }
  
//   const filteredData = currentFilter === "All" 
//     ? data 
//     : data.filter(item => item.category === currentFilter);

//   return (
//     <>
//       <Toolbar
//         filters={filterList}
//         selected={currentFilter}
//         onSelectFilter={filter => handleFilter(filter)}
//       />
//       <ProjectList projects={filteredData}/>
//     </>
//   );
// }

export default Portfolio;
    