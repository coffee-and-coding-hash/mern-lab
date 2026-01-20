import React from "react";

/* Initial student list */
const studlist = [
  {
    slno: 1,
    name: "stud1",
    usn: "rvce1",
    tmarks: 150,
  },
  {
    slno: 2,
    name: "stud2",
    usn: "rvce2",
    tmarks: 145,
  },
];

/* Student Row Component */
class StudentRow extends React.Component {
  render() {
    const stud1 = this.props.stdli;
    return (
      <tr>
        <td>{stud1.slno}</td>
        <td>{stud1.name}</td>
        <td>{stud1.usn}</td>
        <td>{stud1.tmarks}</td>
      </tr>
    );
  }
}

/* Students Table */
class StudentsTable extends React.Component {
  render() {
    const studrows = this.props.studlist.map((studli) => (
      <StudentRow key={studli.slno} stdli={studli} />
    ));

    return (
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Student Name</th>
            <th>USN</th>
            <th>Total Marks</th>
          </tr>
        </thead>
        <tbody>{studrows}</tbody>
      </table>
    );
  }
}

/* Add Student Form */
class StudentAddSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.studAdd;

    const studli = {
      name: form.name.value,
      usn: form.usn.value,
      tmarks: form.tmarks.value,
    };

    this.props.CreateStudentAdd(studli);

    form.name.value = "";
    form.usn.value = "";
    form.tmarks.value = "";
  }

  render() {
    return (
      <form name="studAdd" onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="usn" placeholder="USN" required />
        <input type="text" name="tmarks" placeholder="Total Marks" required />
        <button>Add</button>
      </form>
    );
  }
}

/* Main Component */
class StudentListTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newStudList: [] };
    this.CreateStudentAdd = this.CreateStudentAdd.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({ newStudList: studlist });
    }, 1000);
  }

  CreateStudentAdd(studli) {
    const studlength = this.state.newStudList.length + 1;
    studli.slno = studlength;

    const newstudlist1 = this.state.newStudList.slice();
    newstudlist1.push(studli);

    this.setState({ newStudList: newstudlist1 });
  }

  render() {
    return (
      <React.Fragment>
        <h2>Student Registration Portal</h2>
        <StudentsTable studlist={this.state.newStudList} />
        <br />
        <StudentAddSubmit CreateStudentAdd={this.CreateStudentAdd} />
      </React.Fragment>
    );
  }
}

export default StudentListTable;
