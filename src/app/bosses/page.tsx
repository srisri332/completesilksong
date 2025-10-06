"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { bosses } from "@/data/silksong";
import Image from "next/image";

const BOSS_COOKIE_KEY = "silksong_bosses_checked";
const COOKIE_DAYS = 365;

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()!.split(";").shift() || null;
  return null;
}

function writeCookie(name: string, value: string, days: number): void {
  if (typeof document === "undefined") return;
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Lax`;
}

export default function BossesPage() {
  const [bossChecked, setBossChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const raw = readCookie(BOSS_COOKIE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(decodeURIComponent(raw)) as Record<
          string,
          boolean
        >;
        setBossChecked(parsed);
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    const allBossNames = bosses.map((b) => b.name);
    const toSave: Record<string, boolean> = {};
    for (const name of allBossNames) {
      if (bossChecked[name]) toSave[name] = true;
    }
    writeCookie(
      BOSS_COOKIE_KEY,
      encodeURIComponent(JSON.stringify(toSave)),
      COOKIE_DAYS
    );
  }, [bossChecked]);

  function toggleBoss(name: string) {
    setBossChecked((prev) => ({ ...prev, [name]: !prev[name] }));
  }

  function resetBosses() {
    if (typeof window !== "undefined") {
      const confirmed = window.confirm(
        "Reset bosses progress? This cannot be undone."
      );
      if (!confirmed) return;
    }
    setBossChecked({});
    writeCookie(
      BOSS_COOKIE_KEY,
      encodeURIComponent(JSON.stringify({})),
      COOKIE_DAYS
    );
  }

  const bossTotalCount = bosses.length;
  const bossCheckedCount = useMemo(() => {
    return bosses.reduce((acc, b) => (bossChecked[b.name] ? acc + 1 : acc), 0);
  }, [bossChecked]);

  return (
    <main className='min-h-screen bg-silksong text-stone-100'>
      <div className='mx-auto max-w-5xl px-4 py-8'>
        <div className='mb-4 flex justify-center'>
          <Image
            src='/hkss-logo.png'
            alt='Silksong logo'
            width={180}
            height={45}
            className='h-45 w-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.45)]'
            priority
          />
        </div>

        <header className='mb-6 flex items-center justify-between'>
          <h1 className='text-2xl font-semibold'>Bosses List</h1>
          <Link
            href='/'
            className='text-sm text-[#ff4f56] underline hover:no-underline'>
            Back to Checklist
          </Link>
        </header>

        <section className='mb-8'>
          <div className='mb-1 flex items-center justify-between'>
            <span className='text-stone-300'>PROGRESS</span>
            <div className='flex items-center gap-3'>
              <span className='font-medium'>
                {bossCheckedCount}/{bossTotalCount}
              </span>
              <button
                onClick={resetBosses}
                className='rounded-md border border-[#ff4f56]/30 bg-[#ff4f56] px-3 py-1.5 text-xs text-stone-100 shadow-sm shadow-[#ff4f56]/30 hover:bg-stone-600 cursor-pointer'>
                Reset
              </button>
            </div>
          </div>
          <div className='h-3 w-full rounded bg-stone-700'>
            <div
              className='h-3 rounded bg-[#ff4f56] transition-all'
              style={{ width: `${(bossCheckedCount / bossTotalCount) * 100}%` }}
            />
          </div>
        </section>

        <section className='rounded-lg border border-stone-700 bg-stone-900/50'>
          <ul className='divide-y divide-stone-700'>
            {bosses.map((b) => (
              <li
                key={b.name}
                className='flex items-center gap-3 px-4 py-3 transition-colors hover:bg-stone-800/40'>
                <input
                  id={`boss-${b.name}`}
                  type='checkbox'
                  className='h-4 w-4 accent-[#ff4f56]'
                  checked={!!bossChecked[b.name]}
                  onChange={() => toggleBoss(b.name)}
                />
                <label
                  htmlFor={`boss-${b.name}`}
                  className='flex-1 cursor-pointer select-none text-base'>
                  {b.link ? (
                    <a
                      href={b.link}
                      target='_blank'
                      rel='noreferrer'
                      className='underline'
                      onClick={(e) => e.stopPropagation()}>
                      {b.name}
                    </a>
                  ) : (
                    b.name
                  )}
                </label>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
