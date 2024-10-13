

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import EditForm from "./_components/EditForm";

async function getCoursePage(courseId: string) {

	const {userId} = auth();
	if(!userId) {
		return redirect("/login");
	}

	const course = await db.course.findFirstOrThrow({
		where: {
			userId,
			id: courseId
		}
	});

	return course;
}

const CourseEditPage = async (params: { params: { courseId: string } }) => {
    
	const course = await getCoursePage(params.params.courseId);
	if(!course) {
		return <div>Course not found</div>;
	}

	const requireFields = [
		course.title,
		course.description,
		course.imageUrl,
		course.price,
		course.author,
		course.categoryId
	]

	const totalFields = requireFields.length;
	const completedFields = requireFields.filter(Boolean).length;

	const completionText = `${completedFields}/${totalFields} fields completed`;

	
	return (
		<div className="p-6">
			<div className="flex flex-row items-center justify-between">
				<h2 className="text-2xl font-bold">Course Setup</h2>
				<span className="text-neutral-400 text-sm">{completionText}</span>
			</div>
			<EditForm initialValues={course} />
		</div>
	);
};

export default CourseEditPage;
