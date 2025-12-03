"use client";
import Image from "next/image";

export default function KontaktMedarbejder({ employees = [] }) {
  if (!employees.length) return <p>Ingen employees fundet</p>;

  return (
    <>
      {employees.map((employee) => (
        <li
          key={employee.id}
          className="flex flex-col rounded-xl border-b-4 border-l-4 border-blue-100 transform transition-transform duration-300 
          hover:scale-105 cursor-pointer ml-4 mr-4 mt-10 min-h-[400px]"
        >
          {employee.image?.[0] && (
            <div className="flex shrink-0 w-full">
              <Image
                src={employee.image[0].url}
                alt={employee.image[0].alt || employee.name}
                width={200}
                height={200}
                className="object-cover rounded-xl h-full w-full"
              />
            </div>
          )}

          <div className="pl-3">
            <h2 className="text-blue-800 font-bold pt-2">{employee.name}</h2>
            <p className="text-blue-800 font-light pt-2">Stilling: {employee.job}</p>
          </div>
        </li>
      ))}
    </>
  );
}
