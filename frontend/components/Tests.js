import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const TESTS_QUERY = gql`
  query TESTS_QUERY {
    tests {
      id
      message
    }
  }
`

class Tests extends Component {
  render() {
    return (
      <>
        <Query query={TESTS_QUERY}>
          {({ data, error, loading }) => {
            console.log(data)
            if (loading) return <p className="loading">Loading...</p>
            if (error) return <p className="error">Error: {error.message}</p>
            return (
              <>
                {data.tests.map(test => (
                  <>
                    <h2>{test.message}</h2>
                    <span>{test.id}</span>
                  </>
                ))}
              </>
            )
          }}
        </Query>
      </>
    )
  }
}

export { Tests as default, TESTS_QUERY }
