import { useGetProfileQuery } from "./profileApi"

export default function ProfilePage() {
    const { data, error, isLoading } = useGetProfileQuery()

    if (error) return (
        <p>{JSON.stringify(error)}</p>
    )

    return (
        <>
            {data && (
                JSON.stringify(data)
            )}
        </>
    )
}