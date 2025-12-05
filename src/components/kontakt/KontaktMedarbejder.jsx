"use client";
import Image from "next/image";

export default function KontaktMedarbejder({ employees = [] }) {
  if (!employees.length) return <p>Ingen employees fundet</p>;

  return (
    <>
      {employees.map((employee) => (
        <li
          key={employee.id}
          className="flex flex-col transform transition-transform duration-300 pl-15 pt-20 text-center"
        >
          {employee.image?.[0] && (
            <div className="flex shrink-0 w-full">
              <Image
                src={employee.image[0].url}
                alt={employee.image[0].alt || employee.name}
                width={200}
                height={200}
                className="object-cover h-full w-full"
              />
            </div>
          )}

          <div className="pl-3">
            <h4 className=" font-bold pt-2">{employee.name}</h4>
            <p className="text-(--moerkblaa-900)font-light pt-2">
              Stilling: {employee.job}
            </p>
          </div>
        </li>
      ))}
    </>
  );
}
