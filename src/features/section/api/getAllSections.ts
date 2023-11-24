import { sectionApi } from "./sectionApi"

const getAllSectionsApi = sectionApi.injectEndpoints({
  endpoints: (build) => ({
    getAllSections: build.query({
      query: () =>  ({
        url: '/section/',
        method: 'GET',
       
      }),
      providesTags: ['SectionData'],
    }),
  }),
  overrideExisting: false,  
})

export const { useGetAllSectionsQuery } = getAllSectionsApi