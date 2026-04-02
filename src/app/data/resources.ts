export interface APIResource {
    id: number;
    folder_id: number;
    display_name: string;
    filename: string;
    upload_status: string;
    "content-type": string;
    url: string;
    size: number;
    created_at: string;
    updated_at: string;
    unlock_at: string | null;
    locked: boolean;
    hidden: boolean;
    lock_at: string | null;
    hidden_for_user: boolean;
    thumbnail_url: string | null;
    modified_at: string;
    mime_class: string;
    media_entry_id: string | null;
    category: string;
    locked_for_user: boolean;
    visibility_level: string;
    course_name: string;
    course_id: number;
}

export const mockApiResponse: APIResource[] = [
    {
        "id": 342208939,
        "folder_id": 77569670,
        "display_name": "Lecture 1.pdf",
        "filename": "302+hw7.pdf",
        "upload_status": "success",
        "content-type": "application/pdf",
        "url": "https://canvas.instructure.com/files/342208939/download?download_frd=1&verifier=81j9DNPVjoHlWfeAgGUfTnM1JlFab3ub7zOocztH",
        "size": 1692869,
        "created_at": "2026-03-26T18:56:24Z",
        "updated_at": "2026-04-02T17:00:02Z",
        "unlock_at": null,
        "locked": false,
        "hidden": false,
        "lock_at": null,
        "hidden_for_user": false,
        "thumbnail_url": null,
        "modified_at": "2026-03-26T18:56:23Z",
        "mime_class": "pdf",
        "media_entry_id": null,
        "category": "uncategorized",
        "locked_for_user": false,
        "visibility_level": "inherit",
        "course_name": "Physics 303.5 (DEMO)",
        "course_id": 14498971
    },
    {
        "id": 342208913,
        "folder_id": 77569670,
        "display_name": "Lecture 2.pdf",
        "filename": "340l+hw.pdf",
        "upload_status": "success",
        "content-type": "application/pdf",
        "url": "https://canvas.instructure.com/files/342208913/download?download_frd=1&verifier=cXxiKfJ2g4u1FXKcNuYogcqJjNcLszsmpxLQsnkK",
        "size": 961697,
        "created_at": "2026-03-26T18:56:21Z",
        "updated_at": "2026-04-02T17:06:34Z",
        "unlock_at": null,
        "locked": false,
        "hidden": false,
        "lock_at": null,
        "hidden_for_user": false,
        "thumbnail_url": null,
        "modified_at": "2026-03-26T18:56:21Z",
        "mime_class": "pdf",
        "media_entry_id": null,
        "category": "uncategorized",
        "locked_for_user": false,
        "visibility_level": "inherit",
        "course_name": "Physics 303.5 (DEMO)",
        "course_id": 14498971
    },
    {
        "id": 342208999,
        "folder_id": 77569671,
        "display_name": "Calculus Limits Study Guide.pdf",
        "filename": "calc1_limits.pdf",
        "upload_status": "success",
        "content-type": "application/pdf",
        "url": "https://canvas.instructure.com/files/demodownload1",
        "size": 1250000,
        "created_at": "2026-03-26T18:56:21Z",
        "updated_at": "2026-04-02T17:06:34Z",
        "unlock_at": null,
        "locked": false,
        "hidden": false,
        "lock_at": null,
        "hidden_for_user": false,
        "thumbnail_url": null,
        "modified_at": "2026-03-26T18:56:21Z",
        "mime_class": "pdf",
        "media_entry_id": null,
        "category": "uncategorized",
        "locked_for_user": false,
        "visibility_level": "inherit",
        "course_name": "Math 408C (DEMO)",
        "course_id": 14598972
    }
];
