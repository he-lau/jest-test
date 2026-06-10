import { fireEvent, render, screen } from "@testing-library/react";
import { RandomUser } from "components/RandomUser/RandomUser";
import axios from "axios";

jest.mock("axios");

describe("<RandomUser>",()=>{
    it("loads user when clicking on the button", async ()=>{
        render(<RandomUser/>);
        
        const button = screen.getByTestId("loadRandomUserBtn");
        axios.get.mockResolvedValueOnce({data:MOKE_USER_RESPONSE});
        fireEvent.click(button)
        //const titleElement = screen.getByRole("heading",{level:2});
        const titleElement = await screen.findByRole("heading",{level:2});
        expect(titleElement.textContent).toBe("Erna Wrobel");
        //screen.debug(titleElement);
    });
});

const MOKE_USER_RESPONSE = {"results":[{"gender":"female","name":{"title":"Ms","first":"Erna","last":"Wrobel"},"location":{"street":{"number":318,"name":"Hauptstraße"},"city":"Zeven","state":"Schleswig-Holstein","country":"Germany","postcode":64340,"coordinates":{"latitude":"-53.5756","longitude":"128.8042"},"timezone":{"offset":"+3:30","description":"Tehran"}},"email":"erna.wrobel@example.com","login":{"uuid":"4ff906fe-9f2d-4eb3-bbd9-69cf46b1a7f0","username":"organicgorilla631","password":"spanish","salt":"7i14UmTQ","md5":"69323f8ca83a8d78d2d6d1a2d58887d2","sha1":"ad95cbb25b1860b62fc370e7deca43736e7f8fed","sha256":"1b5fbaaa40c391ee39baa832d00ca581310954797717399024877dca7c24bca0"},"dob":{"date":"1987-03-24T12:53:54.606Z","age":39},"registered":{"date":"2021-08-05T05:13:04.527Z","age":4},"phone":"0471-6490422","cell":"0172-4174775","id":{"name":"SVNR","value":"26 240387 W 820"},"picture":{"large":"https://randomuser.me/api/portraits/women/24.jpg","medium":"https://randomuser.me/api/portraits/med/women/24.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/24.jpg"},"nat":"DE"}],"info":{"seed":"8cc3d14d3460d39b","results":1,"page":1,"version":"1.4"}};