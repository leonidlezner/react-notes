import { useRef, useState } from "react";

interface INewEntryProps {
  onChange: (data: string) => boolean;
}

export default function NewEntry(props: INewEntryProps) {
  const newEntryRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    newEntry: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = event.target;

    setFormData((prevData) => {
      return { ...prevData, [name]: type === "checkbox" ? checked : value };
    });
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (props.onChange(formData.newEntry)) {
      setFormData((prevData) => {
        return { ...prevData, newEntry: "" };
      });
    } else {
      newEntryRef.current?.focus();
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          ref={newEntryRef}
          type="text"
          name="newEntry"
          value={formData.newEntry}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
