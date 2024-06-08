import React from "react";
import ParaTypo from "./ParaTypo";

type tableDataObject={
    one:string
    two:string
}

type tableCellData=tableDataObject|string

type tableProps = {
  tableHead: string[];
  tableData: tableCellData[];
};

const Table = ({ tableHead, tableData }: tableProps) => {
  return (
    <table className="w-full text-center rounded-md shadow-md">
      <thead>
        <tr className="border-2 border-gray-300">
          {tableHead.map((ele, index) => {
            return <th className="p-3 text-xl" key={index}>{ele}</th>;
          })}
        </tr>
      </thead>

      <tbody>
        <tr className="border-2 border-gray-300 text-xl">
          {tableData.map((ele, index) => {
            let data =
              typeof ele == "object" ? (
                <td key={index} className="flex flex-col items-center p-2">
                  {
                    <>
                      <img className="h-[80px] rounded-md" src={ele.one} alt="" />
                      <ParaTypo>{ele.two}</ParaTypo>
                    </>
                  }
                </td>
              ) : (
                <td>{ele}</td>
              );
            return data;
          })}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
