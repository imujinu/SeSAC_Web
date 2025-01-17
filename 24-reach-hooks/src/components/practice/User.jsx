import { useForm } from "react-hook-form";

export default function User() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log(data);
  };

  const onInValid = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInValid)}>
      <div>
        <input
          type="text"
          placeholder="이름"
          {...register("username", {
            required: "이름은 필수 항목입니다.",
          })}
        />
        {errors.username?.message}
      </div>

      <input
        type="number"
        placeholder="나이"
        {...register("age", {
          validate: {
            insertAge: (value) => {
              return value >= 0 || "0이상의 숫자만 입력가능합니다.";
            },
          },
        })}
      />
      {errors.age?.message}
      <div>
        <button type="submit">제출</button>
      </div>
    </form>
  );
}
