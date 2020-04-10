export default `
  mutation {
    s1: CreateSubject(id: "9321282", sex: "M", age: 32, race: "Mixed/Other")
        id
        sex
        age
        race
      }
      
    b1: CreateBiosample(id: "ACC01MJL-02", type: "PBMC", kind: "Retrospective", category: "Derived", collection_time: { formatted: "2010-03-17" }, elapsed_time: "7")
        id
        type
        kind
        category
        collection_time {
          formatted
        }
        elapsed_time
      }
  }
`;