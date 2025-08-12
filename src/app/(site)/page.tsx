'use client';

// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import Image from "next/image";
import Lottery from "@/component/Lottery";
import { useState } from "react";
import ErrorDialog from "../../component/ErrorDialog";

export default function Home() {
  const [error, setError] = useState<any>(); // eslint-disable-line @typescript-eslint/no-explicit-any
  return (
    <main className="flex items-center justify-center">
      <Lottery onError={setError}/>
      {error && (
        <ErrorDialog onClose={() => setError(undefined)}>
          <p>以下の情報を連絡先から管理者に送信してください</p>
          <p>(連絡先: {process.env.NEXT_PUBLIC_CONTACT_LINK})</p>
          <div className='p-4'>
            <div className="bg-gray-100 text-gray-800 text-sm p-4 rounded-md border border-gray-300 overflow-x-auto whitespace-pre-wrap">
              <p className='font-bold'>エラー内容: {`${error}`}</p>
            </div>
          </div>
        </ErrorDialog>
      )}
    </main>
  );
}
