import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const FilterGroup = props => {
  const {setTypeOfEmployList, typeOfEmployList, setSalaryRange} = props
  const setEmployList = event => {
    const isIncludes = typeOfEmployList.includes(event.target.value)
    if (isIncludes) {
      const newTypeOfEmployList = typeOfEmployList.filter(
        eachId => eachId !== event.target.value,
      )
      setTypeOfEmployList(newTypeOfEmployList)
    } else {
      setTypeOfEmployList([...typeOfEmployList, event.target.value])
    }
  }

  const salaryRange = event => {
    setSalaryRange(event.target.value)
  }

  return (
    <div className="filters-app-container">
      <hr className="line" />
      <h1 className="filters-heading">Type of Employment</h1>
      <ul className="filters-list-container">
        {employmentTypesList.map(each => (
          <li className="list-item" key={each.employmentTypeId}>
            <input
              type="checkbox"
              id={each.employmentTypeId}
              className="checkbox"
              value={each.employmentTypeId}
              onChange={setEmployList}
            />
            <label className="label-txt" htmlFor={each.employmentTypeId}>
              {each.label}
            </label>
          </li>
        ))}
      </ul>
      <hr className="line" />
      <h1 className="filters-heading">Salary Range</h1>
      <ul className="filters-list-container">
        {salaryRangesList.map(each => (
          <li className="list-item" key={each.salaryRangeId}>
            <input
              type="radio"
              className="radio"
              value={each.salaryRangeId}
              id={each.salaryRangeId}
              name="salaryRange"
              onChange={salaryRange}
            />
            <label className="label-txt" htmlFor={each.salaryRangeId}>
              {each.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FilterGroup
